import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Gallery, GalleryItem } from '../Components/Gallery';

const testFunc = function () { }

describe('GalleryItem tests', () => {

    it('displays correct properties', () => {
        const bunny = {};
        const wrapper = shallow(<GalleryItem title="Test Title" description="Test description" url="http://google.com/" bunny={bunny} onRemove={testFunc} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});

describe('Gallery tests', () => {

    it('can render 3 bunnies', () => {

        const wrapper = shallow(

            <Gallery onRemove={testFunc} galleryArray={[
                {
                    title: 'Cute Bunny 1',
                    description: 'Who\'s a cute bunny??',
                    url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
                    bunny: {},
                    onRemove: testFunc
                },
                {
                    title: 'Cute Bunny 2',
                    description: 'Diabolically cute!!',
                    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-25__605.jpg',
                    bunny: {},
                    onRemove: testFunc
                },
                {
                    title: 'Cute Bunny 3',
                    description: 'There are no bounds to the cuteness!',
                    url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-110__605.jpg',
                    bunny: {},
                    onRemove: testFunc
                }
            ]} />

        )

        let galleryArray = wrapper.unrendered.props.galleryArray;
        expect(galleryArray.length).toEqual(3);

    });

});