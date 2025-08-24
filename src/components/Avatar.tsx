interface AvatarProps {
  src: string,
  className?: string
}

function Avatar({ src, className }: AvatarProps) {
  return (
    <div className="avatar">
      <div className={`${className} rounded-full`}>
        <img src={src} />
      </div>
    </div>
  )
}

export default Avatar