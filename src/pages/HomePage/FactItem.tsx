interface FactItemProps {
  fact: string,
  number: number
}

function FactItem({ fact, number }: FactItemProps) {
  return (
    <li className="bg-primary px-7 py-5">
      <p className="text-xl">{fact}</p>
      <p className="bg-secondary text-base-100 w-fit mt-3 ml-auto px-3">Fact {number}</p>
    </li>
  )
}

export default FactItem