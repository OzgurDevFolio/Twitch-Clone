import { Navigation } from './navigation'
import { Toggle } from './toggle'
import { Wrapper } from './wrapper'

const Sidebar = () => {
    return (
        <div>
            <Wrapper>
                <Toggle />
                <Navigation />
            </Wrapper>
        </div>
    )
}

export default Sidebar
