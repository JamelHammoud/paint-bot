import { FC } from 'react'
import { PageLayout } from '../../components'

const PrivacyView: FC = () => {
  return (
    <PageLayout maxWidth={650}>
      <div className="page-content">
        <h1>Privacy Policy</h1>
        <p>
          We at Paint ("we," "us," or "our") respect your privacy and are committed to protecting it. This Privacy
          Policy describes how we collect, use, and share information about you when you use the Paint Discord bot
          ("Paint").
        </p>
        <h2>What information do we collect?</h2>
        <p>
          Paint does not collect any personal user information, such as your name, email address, or other contact
          information.
        </p>
        <h2>How do we use the information we collect?</h2>
        <p>
          We use the information collected by Paint to allow you to create and send painted messages in Discord. We do
          not use the information for any other purpose, and we do not share the information with any third parties.
        </p>
        <h2>Do we use cookies or other tracking technologies?</h2>
        <p>Paint does not use cookies or other tracking technologies.</p>
        <h2>Do we comply with the Children's Online Privacy Protection Act?</h2>
        <p>
          Paint is not directed to children under the age of 13, and we do not knowingly collect personal information
          from children under the age of 13.
        </p>
        <h2>Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or Paint's use of your information, please
          message the maintainer of Paint on Discord by his username: @jamel#0001.
        </p>
      </div>
    </PageLayout>
  )
}

export default PrivacyView
