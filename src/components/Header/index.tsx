import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import timer from '../../assets/timer.svg'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={timer} alt="timer clock" height={24} width={24} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
