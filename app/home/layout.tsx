import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return <section>{children}</section>;
}
