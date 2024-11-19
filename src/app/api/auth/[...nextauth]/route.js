import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session: {
        strategy: "jwt"
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
                    const currentUser = users.find(user => user.email === email);
                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;
            }

        })
    ]
});

//user's data set created
const users = [
    {
        id: 1,
        name: "apple",
        email: "apple@gmail.com",
        password: "123"
    },
    {
        id: 2,
        name: "banana",
        email: "banana@gmail.com",
        password: "123"
    },
    {
        id: 3,
        name: "orange",
        email: "orange@gmail.com",
        password: "123"
    },
]
export { handler as GET, handler as POST }