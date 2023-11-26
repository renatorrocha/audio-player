type Props = {
  title: string
  description: string
}

export default function Cards({ title, description }: Props) {
  return (
    <p>
      <strong>{title}</strong> - {description}
    </p>
  )
}
