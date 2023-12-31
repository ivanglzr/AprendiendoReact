import { useState } from 'react'

export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const imageSrc = `https://unavatar.io/${userName}`

  const btnText = isFollowing ? 'Siguiendo' : 'Seguir'
  const btnClassName = isFollowing
    ? 'tw-followCard-btn is-following'
    : 'tw-followCard-btn'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-profile-img' src={imageSrc} alt='Profile Picture' />
        <div className='tw-profile-info'>
          <strong className='tw-profile-info-name'>{children}</strong>
          <span className='tw-profile-info-username'>@{userName}</span>
        </div>
      </header>

      <aside className='tw-followCard-aside'>
        <button className={btnClassName} onClick={handleClick}>
          <span className='tw-followCard-aside-text'>{btnText}</span>
          <span className='tw-followCard-aside-stopFollow'>
            Dejar de Seguir
          </span>
        </button>
      </aside>
    </article>
  )
}
