import css from './Profile.module.css';

function Profile({name, tag, location, image, stats}) {
  return (
    <div className={css.profile}>
      <div className={css.personalData}>
        <img className={css.avatar} src={image} alt={name} width={250} />
        <p className={css.personalName}>{name}</p>
        <p className={css.infoText}>{tag}</p>
        <p className={css.infoText}>{location}</p>
      </div>
      <ul className={css.statsInfo}>
        <li className={css.statsInfoItem}><span className={css.statsName}>Followers</span> <span className={css.statsValue}>{stats.followers}</span></li>
        <li className={css.statsInfoItem}><span className={css.statsName}>Views</span> <span className={css.statsValue}>{stats.views}</span></li>
        <li className={css.statsInfoItem}><span className={css.statsName}>Likes</span> <span className={css.statsValue}>{stats.likes}</span></li>
      </ul>
    </div>
  )
}

export default Profile;