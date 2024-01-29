// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

export class Account {
  static entity = "Account";
  static schema = {
    id: "String",
    domains: ["String"],
    wrappedDomains: ["String"],
    registrations: ["String"],
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class Registration {
  static entity = "Registration";
  static schema = {
    id: "String",
    domain: "String",
    registrationDate: "Number",
    expiryDate: "Number",
    cost: "Number",
    registrant: "String",
    labelName: "String",
    events: ["String"],
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class RegistrationEvent {
  static entity = "RegistrationEvent";
  static schema = {
    id: "String",
    blockNumber: "Number",
    transactionID: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class WrappedDomain {
  static entity = "WrappedDomain";
  static schema = {
    id: "String",
    expiryDate: "Number",
    fuses: "Number",
    name: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class Domain {
  static entity = "Domain";
  static schema = {
    id: "String",
    name: "String",
    labelName: "String",
    labelhash: "String",
    parent: "String",
    subdomains: ["String"],
    subdomainCount: "Number",
    resolvedAddress: "String",
    owner: "String",
    resolver: {
      id: "String",
      domain: "String",
      address: "String",
      addr: "String",
      contentHash: "String",
      texts: ["String"],
      coinTypes: ["Number"],
      events: [
        {
          id: "String",
          resolver: "String",
          blockNumber: "Number",
          transactionID: "String",
        },
      ],
    },
    ttl: "Number",
    isMigrated: "Boolean",
    createdAt: "Number",
    registrant: "String",
    wrappedOwner: "String",
    expiryDate: "Number",
    wrappedDomain: "String",
    events: [
      {
        id: "String",
        domain: "String",
        blockNumber: "Number",
        transactionID: "String",
      },
    ],
    registration: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class DomainEvent {
  static entity = "DomainEvent";
  static schema = {
    id: "String",
    domain: "String",
    blockNumber: "Number",
    transactionID: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class Resolver {
  static entity = "Resolver";
  static schema = {
    id: "String",
    domain: "String",
    address: "String",
    addr: "String",
    contentHash: "String",
    texts: ["String"],
    coinTypes: ["Number"],
    events: [
      {
        id: "String",
        resolver: "String",
        blockNumber: "Number",
        transactionID: "String",
      },
    ],
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class ResolverEvent {
  static entity = "ResolverEvent";
  static schema = {
    id: "String",
    resolver: "String",
    blockNumber: "Number",
    transactionID: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class Transfer {
  static entity = "Transfer";
  static schema = {
    id: "String",
    domain: "String",
    blockNumber: "Number",
    transactionID: "String",
    owner: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class AddrChanged {
  static entity = "AddrChanged";
  static schema = {
    id: "String",
    resolver: "String",
    blockNumber: "Number",
    transactionID: "String",
    addr: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class MulticoinAddrChanged {
  static entity = "MulticoinAddrChanged";
  static schema = {
    id: "String",
    resolver: "string",
    blockNumber: "Number",
    transactionID: "String",
    coinType: "Number",
    addr: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class TextChanged {
  static entity = "TextChanged";
  static schema = {
    id: "String",
    resolver: "String",
    blockNumber: "Number",
    transactionID: "String",
    key: "String",
    value: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class NameChanged {
  static entity = "NameChanged";
  static schema = {
    id: "String",
    resolver: "String",
    blockNumber: "Number",
    transactionID: "String",
    name: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class AbiChanged {
  static entity = "AbiChanged";
  static schema = {
    id: "String",
    resolver: "String",
    blockNumber: "Number",
    transactionID: "String",
    contentType: "Number",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class PubkeyChanged {
  static entity = "PubkeyChanged";
  static schema = {
    id: "String",
    resolver: "String",
    blockNumber: "Number",
    transactionID: "String",
    x: "String",
    y: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class ContenthashChanged {
  static entity = "ContenthashChanged";
  static schema = {
    id: "String",
    resolver: "String",
    blockNumber: "Number",
    transactionID: "String",
    hash: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class InterfaceChanged {
  static entity = "InterfaceChanged";
  static schema = {
    id: "String",
    resolver: "String",
    blockNumber: "Number",
    transactionID: "String",
    interfaceID: "String",
    implementer: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}

export class VersionChanged {
  static entity = "VersionChanged";
  static schema = {
    id: "String",
    resolver: "String",
    blockNumber: "Number",
    transactionID: "String",
    version: "Number",
    entityId: { type: "String", index: true },
    blocknumber: { type: "String", index: true },
  };
}
