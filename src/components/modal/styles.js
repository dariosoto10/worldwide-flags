import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 800px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  position: absolute;
  left: 25%;
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px;

  img {
    width: 200px;
    height: 150px;
    margin-top: 30px;
    margin-right: 40px;
  }
`
export const Title = styled.p`
  font-size: 1.7rem;
  font-weight: bold;
`
export const FavoriteIcon = styled.i`
  color: #fee544;
  cursor: pointer;
  margin-left: 10px;
`
export const SubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  max-width: 300px;

  span {
    font-weight: 400;
    margin-right: 10px;
  }
`

export const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 10px;
  top: 20px;
  width: 30px;
  height: 30px;
  padding: 0;
`
