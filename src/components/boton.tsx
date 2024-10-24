import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

/**.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.onClick - funcion que se ejecuta al hacer clic en el botón.
 * @param {React.ReactNode} props.children - Contenido del botón.
 *
 * @example
 * <Button onClick={handleClick}>Click Me</Button>
 */
export const Boton: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button
            className="bg-bagroundDark w-3/12 hover:bg-bagroundDarkPlus text-white dark:bg-white dark:text-bagroundDark font-bold py-2 px-4 rounded"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
