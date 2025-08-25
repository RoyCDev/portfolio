interface AvatarProps {
  src: string,
  alt: string,
  className?: string
}

function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <div className="avatar">
      <div className={`${className} rounded-full`}>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default Avatar