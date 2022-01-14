import { mount } from '@vue/test-utils'
// import App from './../src/App.vue'
import ParkingSystem from './../src/components/ParkingSystem.vue'

describe('App', () => {
    const wrapper = mount(ParkingSystem);

    test('Motor 2 jam harga 4000', () => {
        wrapper.setData({vehicle: "Motor"});
        wrapper.setData({startTime: "2022-01-13 20:21:00"});
        wrapper.setData({endTime: "2022-01-13 22:21:00"});
        expect(wrapper.vm.calculatePrice());
        expect(wrapper.vm.price).toBe('4000');
    })

    test('Mobil 2 jam harga 10000', () => {
        wrapper.setData({vehicle: "Mobil"});
        wrapper.setData({startTime: "2022-01-13 20:21:00"});
        wrapper.setData({endTime: "2022-01-13 22:21:00"});
        expect(wrapper.vm.calculatePrice());
        expect(wrapper.vm.price).toBe('10000');
    })

    test('Motor 2 hari 1 jam 3 menit harga 90000', () => {
        wrapper.setData({vehicle: "Motor"});
        wrapper.setData({startTime: "2022-01-13 20:21:00"});
        wrapper.setData({endTime: "2022-01-14 21:23:00"});
        expect(wrapper.vm.calculatePrice());
        expect(wrapper.vm.price).toBe('90000');
    })

    test('Mobil 2 hari 1 jam 3 menit harga 44000', () => {
        wrapper.setData({vehicle: "Mobil"});
        wrapper.setData({startTime: "2022-01-13 20:21:00"});
        wrapper.setData({endTime: "2022-01-13 21:23:00"});
        expect(wrapper.vm.calculatePrice());
        expect(wrapper.vm.price).toBe('44000');
    })
})