// username: "mor_2314",
// password: "83r5^_"

async function signIn(username: string, password: string) {
  const response = await fetch("://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer `,
    },

    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await response.json();
  return { data, response };
}

export default signIn;
