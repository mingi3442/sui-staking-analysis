interface FooterProps {
  title: string;
  description: string;
}

export const Footer = ({ title, description }: FooterProps) => {
  return (
    <div className="border-t-2 bg-zinc-200 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-800">
      <div className="px-8 py-12">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
