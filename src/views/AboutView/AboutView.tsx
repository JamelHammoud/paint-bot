import { FC } from 'react'
import { ROUTES } from '../../utils'
import { ReactComponent as DiscordIcon } from '../../assets/discord-icon.svg'
import { StyledAboutView } from '.'

const AboutView: FC = () => {
  return (
    <StyledAboutView>
      <div className="about-container">
        <h1>
          <b>Paint</b> Discord Bot
        </h1>
        <h2>
          Send <mark>painted</mark> messages in Discord.
        </h2>
        <ol className="usage-steps">
          <li>
            <span>1</span> Invite Paint to your Discord server
          </li>
          <li>
            <span>2</span> Use <code>/paint</code> to start your painting
          </li>
          <li>
            <span>3</span> Paint your masterpiece
          </li>
          <li>
            <span>
              <img src="/android-chrome-192x192.png" alt="" />
            </span>
            Click "Send"
          </li>
        </ol>
        <a href={ROUTES.invite} target="_blank" rel="noopener noreferrer">
          <button>
            <DiscordIcon />
            Add to Discord Server
          </button>
        </a>
      </div>
    </StyledAboutView>
  )
}

export default AboutView
