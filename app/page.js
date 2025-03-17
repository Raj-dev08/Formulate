import Feed from "@/components/Feed";
export default function Home() {
  return (
    <div className="flex mt-20 justify-center">
        <h3 className='head_text text-center'>
          Welcome to Formualte
          Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Math-Formulas</span>
        <Feed/>
      </h3>
    </div>
  );
}
