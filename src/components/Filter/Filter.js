import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from 'components/Filter/FilterStyled';
import { nanoid } from "nanoid";

const filterInputId = nanoid(4);

export default function Filter({ onChange}) {
    return (
        <Wrapper>
            <Label htmlFor={filterInputId}>Name
                <Input
                    type="text"
                    name="findByName"
                    id={filterInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    onChange={onChange}
                />
            </Label>
        </Wrapper>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func,
};