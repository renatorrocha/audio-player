type Props = {
  title: string
  description: string
}

export default function Cards({ title, description }: Props) {
  return (
    <p className="text-xl text-start lg:text-2xl">
      <span className="font-semibold">{title}</span> - {description}
    </p>
  )
}
