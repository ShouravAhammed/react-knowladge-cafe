import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark

    return (
        <div className='bg-[#FFFFFF] p-5 mt-5 rounded-md'>
            <h3 className='text-[18px] font-semibold text-[#111111]'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;