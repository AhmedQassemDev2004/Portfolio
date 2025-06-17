import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { techIcons } from "@/lib/techIcons";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string;
    techs: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardImage src={item.image} alt={item.title} />
            <CardDescription>{item.description}</CardDescription>
            <CardTechs techs={item.techs} />
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({
  className,
  src,
  alt = "Card image",
}: {
  className?: string;
  src?: string;
  alt?: string;
}) => {
  if (!src) return null;

  return (
    <div className={cn("overflow-hidden rounded-lg mt-4", className)}>
      <img
        src={src}
        alt={alt}
        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/400x200/0C0E23/ffffff?text=Project+Image";
        }}
      />
    </div>
  );
};

export const CardTechs = ({
  className,
  techs = [],
}: {
  className?: string;
  techs: string[];
}) => {
  if (!techs.length) return null;

  return (
    <div className={cn("flex flex-wrap gap-2 mt-4", className)}>
      {techs.map((tech, index) => (
        <div
          key={index}
          className="flex items-center bg-slate-800/50 rounded-full px-3 py-1 text-xs text-zinc-300"
          title={tech}
        >
          {techIcons[tech as keyof typeof techIcons] && (
            <span
              className="w-4 h-4 mr-1"
              dangerouslySetInnerHTML={{
                __html: techIcons[tech as keyof typeof techIcons],
              }}
            />
          )}
          {tech}
        </div>
      ))}
    </div>
  );
};
