import {
    List,
    Radio
} from 'mdc-react';

const PackList = ({ packs, selectedPack, onChange }) => {
    return (
        <List>
            {packs.map(pack =>
                <List.Item
                    key={pack.id}
                    element="label"
                    graphic={
                        <Radio
                            name="pack"
                            value={pack.id}
                            checked={pack === selectedPack}
                            onChange={() => onChange(pack)}
                        />
                    }
                    text={pack.description}
                    meta={<span><strong>{pack.price}</strong> руб.</span>}
                />
            )}
        </List>
    );
};

export default PackList;