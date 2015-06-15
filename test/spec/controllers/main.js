'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('snakeGameApp'));

  var MainCtrl,
    opts,
    listContactsKey,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    listContactsKey = 0;
    opts = {
      contact: [
        {
          name: '',
          address: '',
          phone: ''
        }
      ],
      listContacts: [
        {_id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 102', phone: '557188339931'},
        {_id: 2, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 103', phone: '557188339932'},
        {_id: 3, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 104', phone: '557188339933'},
        {_id: 4, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 105', phone: '557188339934'},
        {_id: 5, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339935'},
        {_id: 6, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 107', phone: '557188339936'}
      ],
    };
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('#reset', function () {
    MainCtrl.contact = opts.contact[listContactsKey];
    expect(MainCtrl.contact.name).toBe(opts.contact[listContactsKey].name);
    expect(MainCtrl.contact.address).toBe(opts.contact[listContactsKey].address);
    expect(MainCtrl.contact.phone).toBe(opts.contact[listContactsKey].phone);

    MainCtrl.reset();

    expect(MainCtrl.contact.name).toBe('');
    expect(MainCtrl.contact.address).toBe('');
    expect(MainCtrl.contact.phone).toBe('');
  });

  it('#numberOfPages', function(){
    expect(MainCtrl.numberOfPages()).toEqual(1);
    MainCtrl.listContacts = [
        {_id: 1, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 102', phone: '557188339931'},
        {_id: 2, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 103', phone: '557188339932'},
        {_id: 3, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 104', phone: '557188339933'},
        {_id: 4, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 105', phone: '557188339934'},
        {_id: 5, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 106', phone: '557188339935'},
        {_id: 6, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 107', phone: '557188339936'},
        {_id: 7, name: 'Allan Benjamin', address: 'St. Claire Avenue, Nº 108', phone: '557188339931'},
        {_id: 8, name: 'Joseph Climber', address: 'St. Claire Avenue, Nº 109', phone: '557188339932'},
        {_id: 9, name: 'Georgia Smith', address: 'St. Claire Avenue, Nº 110', phone: '557188339933'},
        {_id: 10, name: 'Gregory Levinsky', address: 'St. Claire Avenue, Nº 111', phone: '557188339934'},
        {_id: 11, name: 'Joshua Jackson', address: 'St. Claire Avenue, Nº 112', phone: '557188339935'},
        {_id: 12, name: 'Jackeline Macfly', address: 'St. Claire Avenue, Nº 113', phone: '557188339936'}
      ];
    expect(MainCtrl.numberOfPages()).toEqual(2);
  });

  it('#create', function () {
    MainCtrl.contact = opts.contact;
    var listcontacthLength = MainCtrl.listContacts.length;
    expect(MainCtrl.listContacts.length).toBe(listcontacthLength);

    MainCtrl.create(opts.contact[listContactsKey]);
    expect(MainCtrl.listContacts.length).toBe(listcontacthLength + 1);
  });

  it('#edit', function () {

    MainCtrl.listContacts = opts.listContacts;
    MainCtrl.edit(listContactsKey+1);
    expect(MainCtrl.contact.name).toBe(opts.listContacts[listContactsKey].name);
    expect(MainCtrl.contact.phone).toBe(opts.listContacts[listContactsKey].phone);
    expect(MainCtrl.contact.address).toBe(opts.listContacts[listContactsKey].address);
  });

  it('#update', function () {
    MainCtrl.edit(listContactsKey+1);

    var nameMock = 'Username test',
        addressMock = 'User address',
        phoneMock = 'User phone'
    ;
    MainCtrl.contact.name = nameMock;
    MainCtrl.contact.phone = phoneMock;
    MainCtrl.contact.address = addressMock;

    MainCtrl.update(listContactsKey+1);

    expect(MainCtrl.listContacts[listContactsKey].name).toBe(nameMock);
    expect(MainCtrl.listContacts[listContactsKey].address).toBe(addressMock);
    expect(MainCtrl.listContacts[listContactsKey].phone).toBe(phoneMock);

    expect(MainCtrl.contact.name).toBe(nameMock);
    expect(MainCtrl.contact.address).toBe(addressMock);
    expect(MainCtrl.contact.phone).toBe(phoneMock);

    MainCtrl.contact.name = 'Allan Benjamin';
    MainCtrl.contact.phone = '557188339933';
    MainCtrl.contact.address = 'St. Claire Avenue, Nº 101';

    MainCtrl.update(listContactsKey+1);

  });

  it('#delete', function () {
    expect(MainCtrl.delete(7, false)).toBe(true);
  });

});
