async function signIn(username: string, password: string) {
  const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer `,
    },

    // fake store api에서 허용하는 로그인 계정
    body: JSON.stringify({
      username: "mor_2314",
      password: "83r5^_",
    }),
  });

  const data = await response.json();
  return { data, response };
}

export default signIn;
