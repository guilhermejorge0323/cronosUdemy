import { Link } from 'react-router';

type RouterLinkProps = {
  children: React.ReactNode;
} & React.ComponentProps<'a'>;

export function RouterLink({ children, href, ...props }: RouterLinkProps) {
  if (!href) return null;
  return <Link to={href} {...props}>{children}</Link>;
}
