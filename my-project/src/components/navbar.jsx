
import links from '../data';

const Navbar = () => {
  return (
    <nav className="bg-stone-600 text-stone-200">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col lg:flex-row lg:gap-x-16 lg:items-center lg:py-8">
        
        <h2 className="text-3xl font-bold">
          Web <span className="text-stone-400">Dev</span>
        </h2>
        
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, path, name } = link;
            return (
              <a key={id} href={path} className="hover:underline">
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
