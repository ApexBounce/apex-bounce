type Props = {
  children?: React.ReactNode;
};

export default function Overlay(props: Props) {
  return (
    <div className="absolute z-1 inset-0 bg-black/[55%]">{props.children}</div>
  );
}
