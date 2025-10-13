export type IconName = "menu" | "dropdown";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}
