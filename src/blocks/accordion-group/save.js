import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { getBlockDefaultClassName } from '@wordpress/blocks';
import { PREFIX } from '../../utils/constants';
import { ALLOWED_BLOCKS } from './utils/constants';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @author WebDevStudios
 * @since 2.0.0
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @param {Object} [props] Properties passed from the editor.
 * @return {WPElement} Element to render.
 */
export default function Save(props) {
	const {
		attributes: { title, desc, bkgColor },
	} = props;

	const className = getBlockDefaultClassName('wdsblocks/accordion-group');

	return (
		<div
			className={`${PREFIX}-accordion-group`}
			style={{ backgroundColor: bkgColor }}
		>
			<div className="wrap">
				<RichText.Content
					tagName="h2"
					className={`wp-block-${PREFIX}-accordion-group__title`}
					value={title}
				/>
				<RichText.Content
					tagName="p"
					className={`wp-block-${PREFIX}-accordion-group__desc`}
					value={desc}
				/>
				<div className={`wp-block-${PREFIX}-accordion-group__content`}>
					<InnerBlocks.Content allowedBlocks={ALLOWED_BLOCKS} />
				</div>
			</div>
		</div>
	);
}
