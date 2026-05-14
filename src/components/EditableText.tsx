import { useRef, useEffect, HTMLAttributes } from "react";

interface EditableTextProps extends HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: string;
}

export function EditableText({
  as: Tag = "span",
  className = "",
  children,
  ...props
}: EditableTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.textContent === "") {
      ref.current.textContent = children;
    }
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      contentEditable
      suppressContentEditableWarning
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
