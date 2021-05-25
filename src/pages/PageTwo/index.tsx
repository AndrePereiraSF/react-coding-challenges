import React from 'react'
import ColumnContainer from '../../components/ColumnContainer'
import Column from '../../components/Column'
import Level from '../../components/Level'
import ToggleThemeButton from '../../components/ToggleThemeButton'
import Title from '../../components/Title'
import ButtonContainer from '../../components/ButtonContainer'
import Button from '../../components/Button'
import AppContainer from '../../components/AppContainer'

const PageTwo: React.FC = () => {
  return (
    <AppContainer>
      <Level>
        <div>
          <Title>Dark Mode Challenge</Title>
        </div>
        <ToggleThemeButton />
      </Level>
      <ColumnContainer>
        <Column>
          <p>
            Lollipop powder powder. Cotton candy caramels chupa chups halvah
            muffin caramels apple pie topping cake. Topping chocolate bar pastry
            chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar
            plum. Chocolate bar lollipop candy canes. Biscuit croissant apple
            pie pudding caramels wafer tart tootsie roll macaroon. Croissant
            tiramisu chocolate bar carrot cake lemon drops halvah.
          </p>
        </Column>
        <Column>
          <p>
            Marshmallow tiramisu liquorice bear claw chocolate bar bear claw
            tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops
            marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart.
            Pudding sugar plum chocolate cake cake biscuit pastry pastry
            chocolate bar tart. Lemon drops dessert gummies icing.
          </p>
        </Column>
      </ColumnContainer>

      <ButtonContainer>
        <div className="buttons level-right">
          <Button primary to="/">
            Back
          </Button>
        </div>
      </ButtonContainer>
    </AppContainer>
  )
}

export default PageTwo
