import styled from 'styled-components'

export const Container = styled.button`
  background-color: red;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ type, theme }) =>
    type === 'primary' ? theme.colors.primary : theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  border: none;
  padding: 1em 2em;
  border-radius: 28px;
  width: fit-content;

  > span {
    margin-inline: 0.5em;
    color: ${({ type, theme }) =>
      type === 'primary'
        ? theme.colors.primaryAccent
        : theme.colors.secondaryAccent};
  }
`
