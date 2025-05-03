type ToolNodeProps = {
    data: {
      label: string;
    };
};
  
export const ToolNode = ({data}: ToolNodeProps) => {
    return (
        <div>
            <p>Tool <strong>{data.label}</strong></p>
        </div>
    )
}