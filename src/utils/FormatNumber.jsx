const FormatNumber = ({number}) => {
    return <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)}</span>
}

export default FormatNumber;