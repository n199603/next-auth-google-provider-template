import AuthButon from "./components/AuthButton";

export default function Home() {
  return (
    <div className="flex gap-4 ml-auto">
      <AuthButon type="signout" />
    </div>
  );
}
