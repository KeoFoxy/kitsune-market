import { ParagraphProps } from "./Paragraph.props"
import styles from './Paragraph.module.css'
import cn from 'classnames'

export const Paragraph = ({ fontSize = 16, children, className, data, ...props }):JSX.Element => {
    return (
        <p className={cn(styles.p)}>
            data
        </p>
    )
}