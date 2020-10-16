import {
    List,
    Radio
} from 'mdc-react';

const TypeList = ({ types, selectedType, onChange }) => {
    return (
        <List>
            {types.map(type =>
                <List.Item
                    key={type.id}
                    element="label"
                    graphic={
                        <Radio
                            name="type"
                            value={type.id}
                            checked={type === selectedType}
                            onChange={() => onChange(type)}
                        />
                    }
                    text={type.description}
                />
            )}
        </List>
    );
};

export default TypeList;