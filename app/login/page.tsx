import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      {/* DIREITA */}
      <div className="reative h-full w-full">
        <Image src="/login.png" alt="Faça login" />
      </div>
    </div>
  );
};

export default LoginPage;
