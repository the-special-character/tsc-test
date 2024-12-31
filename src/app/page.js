import Banner from "@/components/Banner";
import Counter from "@/components/Counter";
import Test from "@/components/Test";

export default function Home() {
  return (
    <div id="home">
      <input type="text" placeholder="hello world" />
      <input type="checkbox" />
      <Test />
      <Counter />
      <Banner color="blue" backgroundColor="red" title="hello banner 1" />
      <Banner color="red" backgroundColor="blue" title="hello banner 2" />
      <Banner color="green" backgroundColor="red" title="hello banner 3" />
    </div>
  );
}
