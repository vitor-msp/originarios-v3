import { FormLogin } from "../components/login/FormLogin";

export function PaginaLogin() {
  return (
    <div className={`row m-2 m-sm-4 p-2 p-sm-4 bg-opac`}>
      <h1 className="display-6 mb-5">
        <strong>Login</strong>
      </h1>
      <FormLogin />
    </div>
  );
}
