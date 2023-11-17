import { Button, Input, Select, Header, Footer } from "./components";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen bg-background">
      <Header />
      <div className="flex flex-grow items-start justify-center p-4">
        <form className="flex flex-col gap-8 p-8 border border-text border-opacity-20 bg-background rounded-xl">
          <div className="flex flex-col w-full gap-4">
            <Select label="DDI" />

            <Input label="Phone" placeholder="11912341234" type="tel" />

            <Input label="Message" placeholder="Hello world!" type="tel" />
          </div>

          <Button label="Create Link" type="submit" />
        </form>
      </div>
      <Footer />
    </main>
  );
}
