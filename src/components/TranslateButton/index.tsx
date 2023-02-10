import { useTranslation } from 'react-i18next'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Check, Translate } from 'phosphor-react'
import { useEffect, useState } from 'react';
import { Content, ItemIndicator, RadioItem, Trigger } from './styles';

export function TranslateButton() {
    const [lang, setLang] = useState("pt")

    const { t, i18n } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    return (
        <DropdownMenu.Root>
            <Trigger>
                <Translate size={20}/>
            </Trigger>
            <DropdownMenu.Portal>
                <Content>
                
                    <DropdownMenu.RadioGroup value={lang} onValueChange={setLang}>
                        <RadioItem value="en">
                            <ItemIndicator>
                                <Check />
                            </ItemIndicator>
                            {t('English')}
                        </RadioItem>

                        <RadioItem value="pt">
                            <ItemIndicator>
                                <Check />
                            </ItemIndicator>
                            {t('Portuguese')}
                        </RadioItem>
                    </DropdownMenu.RadioGroup>

                </Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}