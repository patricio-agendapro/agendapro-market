declare module "@iconscout/react-unicons/icons/*" {
    type IconProps = { size?: string; color?: string };
    const icon: (props: IconProps) => JSX.Element;
    export = icon;
    }