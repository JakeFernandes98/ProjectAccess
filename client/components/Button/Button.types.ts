
type buttonColorType = "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;

export default interface ButtonProps {
    /** The button text */
    label: string;

    /** The button colour */
    color?: buttonColorType;

}