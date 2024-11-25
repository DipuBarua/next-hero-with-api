import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {

    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    required: true,
                    placeholder: "Enter Your Email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "Enter Your Password"
                },
            },

            async authorize(credentials) {

                if (!credentials) {
                    return null;
                }

                const { email, password } = credentials;

                if (email) {
                    // const currentUser = users.find(user => user.email === email);

                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({ email });

                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;
            }

        }),


        // NOTE: *****
        //http://localhost:3000 >> is used only for development. after production it will not work. Take action:
        //step-1: Need to change homePage url (use DOMAIN) in google/github configuration after production.[ go to NextAuth.js Doc.] 
        //step-2: Authorized redirect URIs For production: https://{YOUR_DOMAIN}/api/auth/callback/google 


        // Google provider 
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),

        // GitHub provider 
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        }),

    ],

    // Integrate Authentication-->
    //callbacks obj is used to manipulate session to access more data of users.
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token
        },

        async session({ session, token }) {
            session.user.type = token.type
            return session;
        },
    }
}

const handler = NextAuth(authOptions);

//user's data set created
const users = [
    {
        id: 1,
        name: "apple",
        email: "apple@gmail.com",
        password: "123",
        type: "admin",
        image: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        name: "banana",
        email: "banana@gmail.com",
        password: "123",
        type: "user",
        image: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        name: "orange",
        email: "orange@gmail.com",
        password: "123",
        type: "modaretor",
        image: "https://picsum.photos/200/300"
    },
]
export { handler as GET, handler as POST }