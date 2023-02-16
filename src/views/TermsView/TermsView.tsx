import { FC } from 'react'
import { PageLayout } from '../../components'

const TermsView: FC = () => {
  return (
    <PageLayout maxWidth={650}>
      <div className="page-content">
        <h1>Terms of Service</h1>
        <p>By using the Paint Discord bot ("Paint"), you agree to the following terms and conditions:</p>
        <ol>
          <li>
            Paint is a tool that allows you to create painted messages and send them in Discord. It does not collect any
            personal user information, nor does it store any data whatsoever.
          </li>
          <li>
            Paint has access to the user ID of the person who sent the painted message, as well as the guild and channel
            IDs of the guild where the message was sent.
          </li>
          <li>
            You are solely responsible for any content you create using Paint. You agree not to use Paint to create or
            distribute any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar,
            obscene, sexually explicit, or otherwise objectionable.
          </li>
          <li>
            Paint may be subject to periodic updates and modifications, which may include bug fixes, feature
            enhancements, and other changes. These updates and modifications may be made without prior notice.
          </li>
          <li>
            Paint is provided "as is" and without warranty of any kind, express or implied, including but not limited to
            the warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </li>
          <li>
            In no event shall Paint be liable for any direct, indirect, incidental, special, or consequential damages
            arising out of or in any way connected with the use of Paint.
          </li>
          <li>
            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in
            which Paint is being used.
          </li>
        </ol>
        <p>By using Paint, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>
      </div>
    </PageLayout>
  )
}

export default TermsView
