interface InfoItemProps {
  info: string,
  prefix?: string,
  number: number
}

function InfoItem({ info, prefix, number }: InfoItemProps) {
  return (
    <li className="flex flex-col bg-primary px-7 py-5">
      <p className="text-xl mb-3">{info}</p>
      <p className="text-2xl bg-secondary text-base-100 mt-auto ml-auto px-3">
        {prefix} {number}
      </p>
    </li>
  )
}

export default InfoItem