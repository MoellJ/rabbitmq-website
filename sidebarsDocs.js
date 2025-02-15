/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docsSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'doc',
      id: 'documentation',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Server Documentation',
      link: {type: 'doc', id: 'admin-guide'},
      items: [
        {
          type: 'category',
          label: 'Configuration',
          link: {type: 'doc', id: 'configure'},
          items: [
            {
              type: 'doc',
              id: 'relocate',
              label: 'File Locations',
            },
            'logging',
            {
              type: 'doc',
              id: 'persistence-conf',
              label: 'Persistence',
            },
            {
              type: 'doc',
              id: 'networking',
              label: 'Networking',
            },
            {
              type: 'doc',
              id: 'parameters',
              label: 'Parameters and Policies',
            },
          ],
        },
        {
          type: 'doc',
          id: 'management',
          label: 'Management UI',
        },
        'monitoring',
        'production-checklist',
        {
          type: 'category',
          label: 'TLS Support',
          link: {type: 'doc', id: 'ssl'},
          items: [
            {
              type: 'doc',
              id: 'troubleshooting-ssl',
              label: 'Troubleshooting TLS',
            },
            {
              type: 'doc',
              id: 'clustering-ssl',
              label: 'TLS for Inter-node (Clustering) Traffic',
            },
          ],
        },
        'streams',
        'feature-flags',
        'distributed',
        {
          type: 'category',
          label: 'Clustering',
          link: {type: 'doc', id: 'clustering'},
          items: [
            {
              type: 'doc',
              id: 'cluster-formation',
              label: 'Cluster Formation',
            },
            {
              type: 'doc',
              id: 'ha',
              label: 'Classic Queue Mirroring',
            },
            {
              type: 'doc',
              id: 'partitions',
              label: 'Clustering and Network Partitions',
            },
            {
              type: 'doc',
              id: 'nettick',
              label: 'Net Tick Time',
            },
            {
              type: 'doc',
              id: 'clustering-ssl',
              label: 'TLS for Inter-node (Clustering) Traffic',
            },
            {
              type: 'link',
              label: 'Inter-node Traffic Compression',
              href: 'https://www.rabbitmq.com/clustering-compression.html',
            },
          ],
        },
        {
          type: 'doc',
          id: 'reliability',
          label: 'Reliable Delivery',
        },
        {
          type: 'category',
          label: 'Schema Definition Export and Import',
          link: {type: 'doc', id: 'definitions'},
          items: [
            {
              type: 'link',
              label: 'Warm standby Using Definition Replication',
              href: 'https://www.rabbitmq.com/definitions-standby.html',
            },
          ],
        },
        'backup',
        {
          type: 'category',
          label: 'Alarms',
          link: {type: 'doc', id: 'alarms'},
          items: [
            'memory',
            {
              type: 'doc',
              id: 'disk-alarms',
              label: 'Disk Alarms',
            },
            {
              type: 'doc',
              id: 'memory-use',
              label: 'Memory Use',
            },
            'flow-control',
          ],
        },
        {
          type: 'doc',
          id: 'memory-use',
          label: 'Memory Use',
        },
        {
          type: 'category',
          label: 'Networking',
          link: {type: 'doc', id: 'networking'},
          items: [
            {
              type: 'doc',
              id: 'troubleshooting-networking',
              label: 'Troubleshooting Networking',
            },
          ]
        },
        'vhosts',
        {
          type: 'doc',
          id: 'access-control',
          label: 'Access Control (Authorisation)',
        },
        'authentication',
        {
          type: 'doc',
          id: 'ldap',
          label: 'LDAP',
        },
        {
          type: 'doc',
          id: 'lazy-queues',
          label: 'Lazy Queues',
        },
        {
          type: 'doc',
          id: 'event-exchange',
          label: 'Internal Event Exchange',
        },
        {
          type: 'doc',
          id: 'firehose',
          label: 'Firehose (Message Tracing)',
        },
        {
          type: 'category',
          label: 'Manual Pages',
          link: {type: 'doc', id: 'manpages'},
          items: [
            {
              type: 'doc',
              id: 'man/rabbitmqctl.8',
              label: 'rabbitmqctl',
            },
            {
              type: 'doc',
              id: 'man/rabbitmq-diagnostics.8',
              label: 'rabbitmq-diagnostics',
            },
            {
              type: 'doc',
              id: 'man/rabbitmq-plugins.8',
              label: 'rabbitmq-plugins',
            },
            {
              type: 'doc',
              id: 'man/rabbitmq-upgrade.8',
              label: 'rabbitmq-upgrade',
            },
            {
              type: 'doc',
              id: 'man/rabbitmq-queues.8',
              label: 'rabbitmq-queues',
            },
            {
              type: 'doc',
              id: 'man/rabbitmq-streams.8',
              label: 'rabbitmq-streams',
            },
            {
              type: 'doc',
              id: 'man/rabbitmq-server.8',
              label: 'rabbitmq-server',
            },
            {
              type: 'doc',
              id: 'man/rabbitmq-service.8',
              label: 'rabbitmq-service',
            },
            {
              type: 'doc',
              id: 'man/rabbitmq-echopid.8',
              label: 'rabbitmq-echopid',
            },
            {
              type: 'doc',
              id: 'man/rabbitmq-env.conf.5',
              label: 'rabbitmq-env.conf',
            },
          ],
        },
        {
          type: 'doc',
          id: 'windows-quirks',
          label: 'Windows Quirks',
        },
      ],
    },
    {
      type: 'category',
      label: 'Client Documentation',
      link: {type: 'doc', id: 'clients'},
      items: [
        {
          type: 'category',
          label: 'Java Client Guide',
          link: {type: 'doc', id: 'api-guide'},
          items: [
            {
              type: 'doc',
              id: 'java-tools',
              label: 'Java Client Tools',
            },
          ],
        },
        {
          type: 'category',
          label: 'JMS Client',
          link: {type: 'doc', id: 'jms-client'},
          items: [
            {
              type: 'link',
              label: 'JMS Client Spec Compliance',
              href: 'https://github.com/rabbitmq/rabbitmq-jms-client/blob/main/jms-client-compliance.md',
            },
          ],
        },
        {
          type: 'doc',
          id: 'dotnet-api-guide',
          label: '.NET Client Guide',
        },
        {
          type: 'doc',
          id: 'erlang-client-user-guide',
          label: 'Erlang Client Guide',
        },
        {
          type: 'doc',
          id: 'heartbeats',
          label: 'Heartbeats',
        },
        {
          type: 'doc',
          id: 'amqp-0-9-1-reference',
          label: 'AMQP 0-9-1 Reference',
        },
        {
          type: 'doc',
          id: 'uri-spec',
          label: 'AMQP 0-9-1 URI Spec',
        },
      ]
    },
    {
      type: 'category',
      label: 'Plugins',
      link: {type: 'doc', id: 'plugins'},
      items: [
        {
          type: 'doc',
          id: 'management',
          label: 'Management plugin',
        },
        {
          type: 'category',
          label: 'Federation plugin',
          link: {type: 'doc', id: 'federation'},
          items: [
            {
              type: 'doc',
              id: 'federated-exchanges',
              label: 'Exchanges',
            },
            {
              type: 'doc',
              id: 'federated-queues',
              label: 'Queues',
            },
            {
              type: 'doc',
              id: 'federation-reference',
              label: 'Reference',
            },
          ],
        },
        {
          type: 'category',
          label: 'Shovel plugin',
          link: {type: 'doc', id: 'shovel'},
          items: [
            {
              type: 'doc',
              id: 'shovel-static',
              label: 'Static Shovels',
            },
            {
              type: 'doc',
              id: 'shovel-dynamic',
              label: 'Dynamic Shovels',
            },
          ],
        },
        'stream',
        'stomp',
        {
          type: 'doc',
          id: 'web-stomp',
          label: 'STOMP-over-WebSockets',
        },
        'mqtt',
        {
          type: 'doc',
          id: 'web-mqtt',
          label: 'MQTT-over-WebSockets',
        },
        {
          type: 'doc',
          id: 'ldap',
          label: 'LDAP',
        },
        {
          type: 'doc',
          id: 'oauth2',
          label: 'OAuth 2.0 plugin',
        },
        {
          type: 'doc',
          id: 'installing-plugins',
          label: 'Installing Plugins',
        },
        {
          type: 'doc',
          id: 'plugin-development',
          label: 'Plugin Development',
        },
      ]
    },
    {
      type: 'category',
      label: 'Protocol',
      link: {type: 'doc', id: 'protocol'},
      items: [
        {
          type: 'doc',
          id: 'specification',
          label: 'Compatibility',
        },
        'interoperability',
        'semantics',
        {
          type: 'doc',
          id: 'amqp-0-9-1-quickref',
          label: 'Quick Reference',
        },
        {
          type: 'doc',
          id: 'amqp-0-9-1-reference',
          label: 'Full Reference',
        },
        {
          type: 'doc',
          id: 'amqp-0-8-to-0-9-1',
          label: 'Differences from AMQP 0-8 to 0-9-1',
        },
        {
          type: 'doc',
          id: 'amqp-wireshark',
          label: 'Traffic Analyzer',
        },
      ]
    },
    {
      type: 'category',
      label: 'Our Extensions',
      link: {type: 'doc', id: 'extensions'},
      items: [
        {
          type: 'doc',
          id: 'confirms',
          label: 'Confirms',
        },
        'consumer-cancel',
        'consumer-prefetch',
        'consumer-priority',
        'direct-reply-to',
        {
          type: 'doc',
          id: 'connection-blocked',
          label: 'Blocked Connections',
        },
        {
          type: 'doc',
          id: 'nack',
          label: 'basic.nack',
        },
        {
          type: 'doc',
          id: 'e2e',
          label: 'e2e Bindings',
        },
        {
          type: 'doc',
          id: 'ae',
          label: 'Alternate Exchanges',
        },
        {
          type: 'doc',
          id: 'sender-selected',
          label: 'Sender Routing',
        },
        {
          type: 'doc',
          id: 'ttl',
          label: 'TTL',
        },
        {
          type: 'doc',
          id: 'dlx',
          label: 'Dead Lettering',
        },
        {
          type: 'doc',
          id: 'maxlength',
          label: 'Length Limit',
        },
        {
          type: 'doc',
          id: 'priority',
          label: 'Priority Queues',
        },
        'validated-user-id',
        {
          type: 'doc',
          id: 'auth-notification',
          label: 'Auth Failure',
        },
        'spec-differences',
      ]
    },
    {
      type: 'category',
      label: 'Building',
      link: {type: 'doc', id: 'build'},
      items: [
        {
          type: 'doc',
          id: 'build-server',
          label: 'Build the Server',
        },
        {
          type: 'doc',
          id: 'build-java-client',
          label: 'Build the Java Client',
        },
        {
          type: 'doc',
          id: 'build-dotnet-client',
          label: 'Build the .NET Client',
        },
        {
          type: 'doc',
          id: 'build-erlang-client',
          label: 'Build the Erlang Client',
        },
        {
          type: 'doc',
          id: 'github',
          label: 'Our use of Git and GitHub',
        },
      ]
    },
    'previous',
    {
      type: 'doc',
      id: 'mpl',
      label: 'License',
    },
  ],
};

export default sidebars;
