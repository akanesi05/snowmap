"use client";
import { signIn } from "next-auth/react";

export default function Page() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    if (!email || !password) {
       alert("メールとパスワードを入力してください");
       return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
       await signIn("credentials", {
       email,
       password,
       redirect: true,
       callbackUrl: "/", 
  });
    }
    else {
      alert(data.message || "登録に失敗しました");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ユーザ名
        <input name="name" type="text" />
      </label>

      <label>
        メールアドレス
        <input name="email" type="email" />
      </label>

      <label>
        パスワード
        <input name="password" type="password" />
      </label>

      <button type="submit">登録</button>
    </form>
  );
}
