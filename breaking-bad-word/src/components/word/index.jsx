import style from '@emotion/styled'

const ContainerWord = style.div`
    padding: 3rem;
    border-radius: 0.5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 14rem;


    h2 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -3rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
    }
`

export const Word = ({ wordApi }) => {
  return (
    <ContainerWord>
        <h2>{wordApi.quote}</h2>
        <p>-{wordApi.author}</p>
    </ContainerWord>
  )
}

